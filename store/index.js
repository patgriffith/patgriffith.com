export const state = () => ({
    projects: [],
    sections: []
});
  
export const mutations = {
    setProjects(state, list) {
        state.projects = list;
    },
    setSections(state, list) {
        state.sections = list;
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
        await commit('setProjects', projects);

        let sectionFiles = await require.context('~/content/sections/', false, /\.json$/);        
        let sections = sectionFiles.keys().map(key => {            
            let res = sectionFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSections', sections);
    },
};