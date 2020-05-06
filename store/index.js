export const state = () => ({
    projects: [],
});
  
export const mutations = {
    setProject(state, list) {
        state.projects = list;
    },
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let projectFiles = await require.context('~/content/projects/', false, /\.json$/);        
        let projects = projectFiles.keys().map(key => {            
            let res = projectFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setProject', projects);
    },
};