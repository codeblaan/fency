ARCH=x64
PLATFORM=darwin
electron-packager . \
  --overwrite \
  --platform=$PLATFORM \
  --icon=assets/icon.icns \
  --arch=$ARCH \
  --prune=true \
  --out=release-builds
