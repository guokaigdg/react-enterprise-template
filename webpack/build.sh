#!/bin/bash

# exit 0：正常运行程序并退出程序；
# exit 1：非正常运行导致退出程序；
# 保证你的build.sh脚本有任何错误就退出
set -e

echo "node: $(node -v)"
echo "npm: v$(npm -v)"

readonly ROOT_DIR=$(pwd)
readonly OUTPUT=${ROOT_DIR}/output


# 添加下一行保证能够找到正确的Node和npm，以及yarn命令。
export PATH=$NODEJS_12_16_1_BIN:$PATH

# 核心代码：编译目标
stage=${1:-offline}

# 核心代码：获取提交 HASH，拼接【日期 + buildId 前 7 位】，生成示例: 2021-04-26-9472769
# 也可以自定义，符合 buildid 规范即可：buildid 只支持如下字符：英文字母(大小写)，数字(0-9)，下划线(_)，中划线(-)，点(.)，@ 符号
revision=${AGILE_REVISION}

# 取revision 前7个字符
buildId=${stage}_$(date '+%Y-%m-%d')-${revision:0:7}

# 核心代码：替换 <buildid> 为当前构建版本，要在打包前替换
# sed -i '' "s/<buildid>/${buildId}/g" $ROOT_DIR/weirwood.json
sed -i "s/<buildid>/${buildId}/g" $ROOT_DIR/weirwood.json

# 清空输出区
rm -rf output

# 如果NODE_ENV为production, npm5以上版本就不会安装devDependencies。
# 所以，你先把它设置为development，保证你的devDependencies依赖也会被安装。
NODE_ENV=development &&  npm install -dd

# 为生产环境构建加NODE_ENV=production.
# webpack, babel等工具会使用这个环境变量来决定会不会优化，所以再设置成production。
NODE_ENV=production
BUILD_LIST=build

npm run build:$1
echo $1

mkdir $OUTPUT

# 将weirwood.json拷贝到输出目录
cp $ROOT_DIR/weirwood.json ${BUILD_LIST}

cd ${BUILD_LIST}/js
# 核心代码：压缩所有 sourcemap，注意不能包含文件夹，必须扁平压缩
tar -czf sourcemap.tar.gz *.js *.js.map
mv sourcemap.tar.gz $ROOT_DIR/$BUILD_LIST

# 核心代码： 删除所有 map 文件和 map 压缩包
rm *.js.map
# rm sourcemap.tar.gz

cd $ROOT_DIR/$BUILD_LIST

# 压缩资源
jar -cvf build.zip *

# 拷贝压缩资源到输出目录，docker要拉取的资源
cp build.zip $OUTPUT

# 清空打包区域
cd $ROOT_DIR && rm -rf $BUILD_LIST

# 验证是或否成功
echo "脚本执行完毕..."

# 退出当前脚本
exit 0