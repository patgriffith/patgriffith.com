export const state = () => ({
    projects: [],
    words: [],
    sections: [],
    testimonials: [
        {
          img: "/img/testies/anthony.png",
          name: "Anthony Ongaro",
          position: "BreakTheTwitch.com",
          website: "https://www.breakthetwitch.com",
          content: "Dude, you're like a highly skilled ninja assassin operative creator coder. One of the smartest people I know. It's crazy how fast you can build stuff. I really appreciate your help."
        },
        {
          img: "/img/testies/capers.png",
          name: "Capers Rumph",
          position: "theoppositeofwar.com",
          website: "https://theoppositeofwar.com",
          content: "Patrick is an actual ray of actual light. His energy, enthusiasm, openness, thoughtfulness, and inquisitive nature are exemplary."
        },
    ]
});
  
export const mutations = {
    setProjects(state, list) {
        state.projects = list;
    },
    setWords(state, list) {
        state.words = list;
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
        
        let writingFiles = await require.context('~/content/words/', false, /\.json$/);        
        var words = writingFiles.keys().map(key => {            
            let res = writingFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        words = words.filter(function(word) {
            return word.visible == true;
        });
        await commit('setWords', words);

        let sectionFiles = await require.context('~/content/sections/', false, /\.json$/);        
        let sections = sectionFiles.keys().map(key => {            
            let res = sectionFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSections', sections);
    },

    
};