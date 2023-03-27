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


# 验证是或否成功
echo "脚本执行完毕..."

# 退出当前脚本
exit 0
