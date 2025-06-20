const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootw3209/",
            name: "springbootw3209",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootw3209/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Web的就业管理系统"
        } 
    }
}
export default base
