VERSION=$1
NAME=Fency
DIR=$NAME-$VERSION
ARCH=x64
PLATFORM=darwin
json -I -f package.json -e "this.version='${VERSION}'"
mkdir -p release-builds/$DIR
electron-packager . \
  --overwrite \
  --platform=$PLATFORM \
  --icon=assets/icon.icns \
  --arch=$ARCH \
  --prune=true \
  --out=release-builds
rm -rf release-builds/$DIR/
rm -rf release-builds/$DIR.dmg
rm -rf release-builds/$DIR.dmg.zip
mkdir -p release-builds/$DIR/
cp -R release-builds/Fency-$PLATFORM-$ARCH/Fency.app release-builds/$DIR/Fency.app
echo "Drag Fency.app to Applications folder to install" > release-builds/$DIR/Notes.txt
echo "@codeblaan at github" >> release-builds/$DIR/Notes.txt
ln -s /Applications release-builds/$DIR/Applications
hdiutil create \
  -fs HFS+ \
  -srcfolder release-builds/$DIR/ \
  release-builds/$DIR.dmg
zip -r release-builds/$DIR.dmg.zip release-builds/$DIR.dmg
cd release-builds/
shasum -a 256 $DIR.dmg.zip > $DIR.dmg.zip.sha256
shasum -c $DIR.dmg.zip.sha256
open .
