rm -rf build
npx babel src --out-dir build --presets react-app/prod
cp index.html build
cp -r vendor build
