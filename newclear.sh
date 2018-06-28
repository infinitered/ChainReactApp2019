watchman watch-del-all
rm -rf /Users/gantman/Library/Caches/CocoaPods
rm -rf ~/Library/Developer/Xcode/DerivedData
yarn cache clean
rm -rf node_modules
rm -rf ios/build
rm -rf ios/Pods
yarn
cd ios
pod install
rm -rf $TMPDIR/react-*
fastlane beta
cd -
