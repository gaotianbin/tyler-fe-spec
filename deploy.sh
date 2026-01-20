#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

push_addr=`git remote get-url --push origin`
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist
push_branch=gh-pages
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd $dist_path
# 初始化
git init
# 添加文件
git add -A
# 提交
git commit -m "deploy: $commit_info"
# 推送到远程仓库
git push -f $push_addr HEAD:$push_branch
# 切换回之前的工作目录
cd -
# 删除打包的文件夹
rm -rf $dist_path