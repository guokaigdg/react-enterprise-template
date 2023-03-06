const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('./svg', true, /\.svg$/));
} catch (error) {
    console.log(error);
}
export {}; // 默认导出，ts如若不导出，会警告
