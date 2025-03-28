# WeArt 官方网站

WeArt 是一家专注于艺术教育的机构，本项目是其官方网站的源代码。

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **包管理工具**: pnpm
- **样式解决方案**: 
  - Tailwind CSS
  - CSS Modules
- **UI 组件**:
  - React Slick (轮播图组件)
  - Headless UI (下拉菜单等无样式组件)
- **路由**: React Router v6
- **代码规范**: ESLint + Prettier

## 目录结构

```
WeArt/
├── src/
│   ├── assets/        # 静态资源文件
│   ├── components/    # React 组件
│   │   ├── common/    # 通用组件
│   │   ├── home/      # 首页相关组件
│   │   └── layout/    # 布局组件
│   ├── pages/         # 页面组件
│   ├── App.jsx        # 应用入口
│   └── main.jsx       # 主入口文件
├── public/            # 公共资源
├── index.html         # HTML 模板
├── package.json       # 项目依赖
└── vite.config.js     # Vite 配置
```

## 安装和运行

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0

### 安装步骤

1. 安装 pnpm（如果未安装）

```bash
npm install -g pnpm
```

2. 克隆项目

```bash
git clone https://github.com/your-username/WeArt.git
cd WeArt
```

3. 安装依赖

```bash
pnpm install
```

4. 运行开发服务器

```bash
pnpm dev
```

5. 构建生产版本

```bash
pnpm build
```

### 开发注意事项

- 使用 `pnpm lint` 进行代码规范检查
- 使用 `pnpm format` 格式化代码
- 开发时请遵循项目既定的代码规范和组件结构
- 新增组件请放在对应的目录下，并遵循组件命名规范
- 使用 `pnpm add <package-name>` 安装新依赖
- 使用 `pnpm add -D <package-name>` 安装开发依赖

## 主要功能模块

- 首页轮播展示
- 课程介绍
- 师资团队展示
- 作品集展示
- 校区地图
- 多语言支持（中文/英文）

## 部署

项目使用 Vite 构建，生产环境构建文件位于 `dist` 目录。可以将该目录下的文件部署到任何静态文件服务器。

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 Pull Request

## 许可证

[MIT License](LICENSE)

## 联系方式

- 邮箱: info@weart.ca
- 电话: (647) 898-6018
- 地址: 21 Fairburn Dr #20, Markham, ON L6G 0A4
