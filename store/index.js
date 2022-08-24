


export const state = () => ({
    /*****************************************************
     * General Info
     *****************************************************/
    API_URL: "https://api.immocrm360.com.mx",
    CONTACT_URL: "https://api.immocrm360.com.mx",
    API_PARAMS: {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: {},
    },
    NEWS_VISITS: 0,
    NEWS_CONTACTS: 0,
    USER_IP: null,
    CAPTCHA_KEY: "6LeWDYkeAAAAAOfZ6RFQmqbQ3KC7LGVA5SjpRrXs",
    ID_COMPANY: "4",
    URL_SITE: "https://immomarket.com.mx",
    ACTUAL_PAGE: "",
    INFO_COMPANY: null,
    ERROR_CODE: 0,
    MATADATA: {
        company: 0,
        detail: 0,
    },
    PROPS_PER_PAGE: 9,
    AGENTS_PER_PAGE: 8,


    /*****************************************************
     * Developments Info
     *****************************************************/
    developmentsList: null,
    developmentDetail: 0,
    activeUnit: 0,

    /*****************************************************
     * Properties Info
     *****************************************************/
    homeCarousel: [],
    homeList: null,
    propertiesList: null,
    propertiesByAgent: null,
    propertiesDetail: 0, //Cache properties
    propertyDetail: 0,
    propertiesSearch: null,
    propertyAccess: null,
    propertiesSearchV:null,
    propertiesSearchR:null,
    totalPag: 0,
    pagesList: [],
    totalResultados: 0,
    /*****************************************************
     * Franchise Info
     *****************************************************/
    teamList: null,
    officesList: null,
    agentActive: null,
    /*****************************************************
     * Search Info
     *****************************************************/
    inputs: {
        cities: null,
        types: null,
        typesDevs: null,
        citiesDevs: null,
    },
})


export const getters = {
    _getInfoCompany(state) {
        return state.INFO_COMPANY;
    },
    _getHomeSlide(state) {
        return state.homeCarousel;
    },
    _getHomeProperties(state) {
        return state.homeList;
    },
    _getProperties(state) {
        return state.propertiesList;
    },
    _getPropertiesV(state) {
        return state.propertiesSearchV;
    },
    _getPropertiesR(state) {
        return state.propertiesSearchR;
    },
    _getPropertiesByAgent(state) {
        return state.propertiesByAgent;
    },
    _getPages(state) {
        return state.pagesList;
      },
      _getResultados(state) {
        return state.totalResultados;
      },
      _getTotalPag(state) {
        return state.totalPag;
      },
    _getDevelopments(state) {
        return state.developmentsList;
    },
    _getTeam(state) {
        return state.teamList;
    },
    _getTeamByOffice(state) {
        return state.teamByOffices;
    },
    _getDataAgent(state) {
        return state.agentActive;
    },
    _getOffices(state) {
        return state.officesList;
    },
    _getProperty(state) {
        return state.propertyDetail;
    },
    _getDevelopment(state) {
        return state.developmentDetail;
    },
    _getInputs(state) {
        return state.inputs;
    },
    _getResults(state) {
        return state.propertiesSearch;
    },
    _getError(state) {
        return state.ERROR_CODE;
    },
    _getHomeNews(state) {
        return state.homeNews;
    },
    _getHomePlaces(state) {
        return state.homePlaces;
    },
    _getBestDevelopments(state) {
        return state.bestDevelopments;
    },
    _getHomeVideos(state) {
        return state.homeVideos;
    },
    _getMasterBroker(state) {
        return state.masterBroker;
    },
    _getActiveUnit(state) {
        return state.activeUnit;
    }
}




export const actions = {
    /*****************************************************
     * General Actions
     *****************************************************/
    setNewVisit({ commit, state }) {
        let config = state.API_PARAMS;
        let data = `m=countVisits&folio=${state.ID_COMPANY}&unic=1`;
        config.body = data;
        if (process.env.NODE_ENV === "production") {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        commit("setNewVisit");
                        commit("setError", res.status);
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    setConcurrentVisit({ commit, state }) {
        let config = state.API_PARAMS;
        let data = `m=countVisits&folio=${state.ID_COMPANY}&concurrent=1`;
        config.body = data;
        if (process.env.NODE_ENV === "production") {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        commit("setNewVisit");
                        commit("setError", res.status);
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    setPropertyClick({ commit, state }, propertyData) {
        let data = `m=viewsProperty`;
        for (let param in propertyData) {
            data += `&${param}=${propertyData[param]}`;
        }
        commit('setBody', data);

        if (process.env.NODE_ENV === "production") {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        commit("setNewVisit");
                        commit("setError", res.status);
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    setNewContact({ commit, state }, contactInfo) {
        let config = state.API_PARAMS;
        let data = `m=contact&folio=${state.ID_COMPANY}`;
        for (let param in contactInfo) {
            data += `&${param}=${contactInfo[param]}`;
        }
        config.body = data;
        if (process.env.NODE_ENV === "production") {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        commit("setNewContact");
                        commit("setError", res.status);
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    getInfoCompany({ commit, state }) {
        // let config = state.API_PARAMS;
        let data = `m=footer&folio=${state.ID_COMPANY}`;
        // config.body = data;
        commit('setBody', data);

        fetch(state.API_URL, state.API_PARAMS)
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 200) {
                    commit("setInfoCompany", res.data[0]);
                    commit("setError", res.status);
                } else {
                    commit("setError", res.status);
                }
            });
        fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((res) => {
                commit("setUserIp", res);
            });
    },
    getCompanyMetadata({ commit, state }) {
        // let config = state.API_PARAMS;
        let data = `m=metaC&folio=${state.ID_COMPANY}`;
        // config.body = data;
        commit('setBody', data);
        fetch(state.API_URL, state.API_PARAMS)
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 200) {
                    commit("setCompanyMetadata", res.data);
                    commit("setError", res.status);
                } else {
                    commit("setError", res.status);
                }
            });
        fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((res) => {
                commit("setUserIp", res);
            });
    },

    /*****************************************************
     * Home Actions
     *****************************************************/
    getHomeSlide({ commit, state }) {
        // let config = state.API_PARAMS;
        let data = `m=slider&dev=215,339,309,400,439,309&limit=9`;
        // config.body = data;
        commit('setBody', data)
        if (state.homeCarousel.length == 0) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setHomeSlide", res.data);
                            //commit('configureImages','homeSlide');  COMMENTED FOR ERROR WAIT FOR FUTURE IMPLEMENTS
                            commit("setError", res.status);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    getHomeProperties({ commit, state }) {
        // let config = state.API_PARAMS;
        let data = `m=properties&principal=true&limit=6&folio=${state.ID_COMPANY}`;
        // config.body = data;
        commit('setBody', data)
        if (!state.homeList) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setHomeProperties", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },

    /*****************************************************
     * Properties Actions
     *****************************************************/
     async getProperties({ commit, state }, datos) {
        // let config = state.API_PARAMS;
        let data;
        if (datos.codeShareProperties != 0) {
            data = `m=properties&limit=6&shareProps=${datos.codeShareProperties}`;
        } else {
            data = `m=properties&limit=6`;
        }
        if (datos.offset != 0) {
           // console.log('props', datos.offset)
            //console.log('currentPage', datos.numeroPaginas)
            datos.offset = (datos.numeroPaginas-1) * datos.offset;
           // console.log('wdespues', datos.offset)
            data += `&offset=${datos.offset}`;
            // state.propertiesList = null;
            commit('setProperties', null)
        } 

        // config.body = data;
        commit('setBody', data)
        if (!state.propertiesList) {
            const res = await fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                // .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setProperties", res.data);
                            commit("setError", res.status);
                            var j =0;
                            var totalJ = res.total;
                            for(j=0; totalJ>0; j++){
                                totalJ = totalJ - 6;
                            }
                            var paginasNuevas = [];
                           // console.log("la pagina eliminada es ", state.pagesList)
                            var i =0;
                            var totalR = res.total;
                            var paginasNuevas = [];
                            for(i=0; totalR>0; i++){
                                totalR = totalR - 6;
                                paginasNuevas.push(i);
                            }
                            var totalPaginas=i;
                           // console.log('total de paginas', totalPaginas)
                            commit("setPages", paginasNuevas);
                            commit("setTotalPag", totalPaginas);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                // });
        }
    },
    resetPages({ commit, state }) {
        commit("resetPagesList");
    },

    getPropertiesByAgent({ commit, state }, agent) {
        let config = state.API_PARAMS;
        let data = `m=findProperty&folio=${state.ID_COMPANY}&user=${agent}`;

        config.body = data;

        fetch(state.API_URL, config)
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 200) {
                    if (res.data.length != 0) {
                        commit("setPropertiesByAgent", res.data);
                        commit("setError", res.status);
                    } else {
                        commit("setError", 204);
                    }
                } else {
                    commit("setError", res.status);
                }
            });
    },
    async getPropertiesR({ commit, state }, city) {
        commit("setError", 0);
        commit("resetPropertiesSearch");
        // let config = state.API_PARAMS;
        let data = `m=findProperty&operation=2&limit=6&country=96`;
        commit('setBody', data)
        // config.body = data;
        if (!state.propertiesSearchR) {
            const res = await fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setPropertiesR", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setPropertiesR", "notFind");
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
        }
    },
    async getPropertiesV({ commit, state }, city) {
        commit("setError", 0);
        commit("resetPropertiesSearch");
        // let config = state.API_PARAMS;
        let data = `m=findProperty&operation=1&limit=6&country=96`;
        commit('setBody', data)
        // config.body = data;
        if (!state.propertiesSearchV) {
            const res = await fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())

                if (res.status == 200) {
                    if (res.data.length != 0) {
                        commit("setPropertiesV", res.data);
                        commit("setError", res.status);
                        return res.data
                    } else {
                        commit("setPropertiesV", "notFind");
                        commit("setError", 204);
                        return null;
                    }
                } else {
                    commit("setError", res.status);
                    return null;
                }
        }
    },

    getProperty({ commit, state }, info) {
        commit("resetProperty", 0);
        // let config = state.API_PARAMS;
        let data;

        if (info.agent != 0) {
            data = `m=property&user=${info.agent}`;
        } else {
            data = `m=property&folio=${info.folio}`;
        }
        commit("setBody", data);

        //if(!state.propertyDetail){
        fetch(state.API_URL, state.API_PARAMS)
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 200) {
                    // let cId = res.data.company.id;
                    if (res.data > 0) {
                        commit("setError", 302);
                    } else {
                        commit("setProperty", res.data);
                        commit("setError", res.status);
                    }
                } else {
                    commit("setError", res.status);
                }
            });
        //}
    },
    /*****************************************************
     * Developments Actions
     *****************************************************/
    getDevelopments({ commit, state }) {

        // let config = state.API_PARAMS;
        let data = `m=developments`;

        // config.body = data;
        commit('setBody', data )
        if (!state.developmentsList) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setDevelopments", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    getDevelopment({ commit, state }, info) {
        commit("resetDevelopment", 0);
        // let config = state.API_PARAMS;
        let data = `m=development&folio=${info.folio}`;
        // config.body = data;
        commit('setBody', data)
        //if(!state.propertyDetail){
        fetch(state.API_URL, state.API_PARAMS)
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 200) {
                    // let cId = res.data.companyid;
                    if (res.data > 0) {
                        commit("setError", 306);
                    } else {
                        commit("setDevelopment", res.data);
                        commit("setError", res.status);
                    }
                } else {
                    commit("setError", res.status);
                }
            });
        //}
    },
    setActiveUnit({ commit }, unit) {
        commit("setUnit", unit);
    },
    /*****************************************************
     * Franchise Actions
     *****************************************************/
    getTeam({ commit, state }) {
        let config = state.API_PARAMS;
        let data = `m=getAgents&folio=${state.ID_COMPANY}`;
        config.body = data;
        if (!state.teamList) {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setTeam", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    getOffices({ commit, state }) {
        let config = state.API_PARAMS;
        let data = `m=offices&folio=${state.ID_COMPANY}`;
        config.body = data;
        if (!state.officesList) {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setOffices", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    getTeamByOffice({ commit, state }) {
        let arrayTeam = state.teamByOffices;
        var agentsUpdated = {};
        for (let i in arrayTeam) {
            let config = state.API_PARAMS;
            let data = `m=getAgents&folio=${state.ID_COMPANY}&offices=${arrayTeam[i].office}`;
            config.body = data;
            if (!arrayTeam[i].agents) {
                fetch(state.API_URL, config)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.status == 200) {
                            if (res.data.length != 0) {
                                for (let item in res.data) {
                                    res.data[item] = Object.defineProperties(res.data[item], {
                                        office: { value: arrayTeam[i].office },
                                        officeName: { value: arrayTeam[i].nameOffice },
                                    });
                                }
                                let dat = {
                                    team: res.data,
                                    index: i,
                                };
                                commit("setTeamByOffice", dat);
                                commit("setError", res.status);
                            } else {
                                commit("setError", 204);
                            }
                        } else {
                            commit("setError", res.status);
                        }
                    });
            }
        }
    },
    getAgentInfo({ commit, state }, agentId) {
        let config = state.API_PARAMS;
        let data = `m=getAgents&user=${agentId}`;
        config.body = data;
        if (!state.officesList) {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setAgent", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
    /*****************************************************
     * Search Actions
     *****************************************************/
    getInputs({ commit, state }) {
        let inputs = { cities: [], types: [], typesDevs: [] };
        // let config = state.API_PARAMS;
        let citiesUrl = `m=cities`;
        let typesUrl = `m=typeProperties`;
        let typesDevsUrl = `m=typeDevelopments`;
        let citiesDevsUrl = `m=citiesDevelopments`;

        // config.body = citiesUrl;
        commit('setBody', citiesUrl)
        if (!state.inputs.cities) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        inputs.cities = res.data;
                        commit("setInputs", inputs);
                        commit("setError", res.status);
                    } else {
                        commit("setError", res.status);
                    }
                });
        }

        // config.body = typesUrl;

        if (!state.inputs.types) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        inputs.types = res.data;
                        commit("setInputs", inputs);
                    }
                });
        }

        // config.body = citiesDevsUrl;
        commit('setBody', citiesDevsUrl)

        if (!state.inputs.citiesDevs) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        inputs.citiesDevs = res.data;
                        commit("setInputs", inputs);
                        commit("setError", res.status);
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
        // config.body = typesDevsUrl;
        commit('setBody', typesDevsUrl)

        if (!state.inputs.typesDevs) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        inputs.typesDevs = res.data;
                        commit("setInputs", inputs);
                    }
                });
        }
        //commit('setInputs', inputs);
    },
    async getResults({ commit, state }, searchForm) {
        commit("setError", 0);
        commit("resetPropertiesSearch");
        // let config = state.API_PARAMS;
        let data;
        let agentSearch=false;
        if (searchForm.searchDevelopments) {
            data = "m=findDevelopment";
        } else {
            data = "m=findProperty";
        }

        if (searchForm.keyword != "") {
            data += `&kwEsp=${searchForm.keyword}`;
        }
        if (searchForm.type && searchForm.type != "") {
            data += `&type=${searchForm.type}`;
        }
        if (searchForm.operation && searchForm.operation != "") {
            data += `&operation=${searchForm.operation}`;
        }
        if (searchForm.city && searchForm.city != "") {
            if (searchForm.searchDevelopments) {
                data += `&citiesDevelopments=${searchForm.city}`;
            } else {
                data += `&city=${searchForm.city}`;
            }
        }

        if (searchForm.minPrice != "") {
            data += `&priceFrom=${searchForm.minPrice}`;
        }
        if (searchForm.maxPrice != "") {
            data += `&priceTo=${searchForm.maxPrice}`;
        }
        if (searchForm.baths != "") {
            data += `&bathrooms=${searchForm.baths}`;
        }
        if (searchForm.beds != "") {
            data += `&bedrooms=${searchForm.beds}`;
        }
        if (searchForm.parking != "") {
            data += `&parking=${searchForm.parking}`;
        }
        if (searchForm.folio != "") {
            data += `&folios=${searchForm.folio}`;
        }
        //Predictions
        if (searchForm.location != "") {
            data += `&location=${searchForm.location}`;
        }

        if (searchForm.user) {
            agentSearch=true;
            data += `&user=${searchForm.user}`;
        }

        // data += `&folio=${state.ID_COMPANY}`;

        // config.body = data;
        commit('setBody', data);
        if (!state.propertiesSearch) {
            fetch(state.API_URL, state.API_PARAMS)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                          if (agentSearch) {
                            commit("setPropertiesByAgent", res.data);
                          }else{
                              commit("setPropertiesSearch", res.data);
                          }
                            commit("setError", res.status);
                        } else {
                            if (agentSearch) {
                              commit("setPropertiesByAgent", "notFind");
                            }else{
                              commit("setPropertiesSearch", "notFind");
                            }
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },

    getPropsPlaces({ commit, state }, city) {
        commit("setError", 0);
        commit("resetPropertiesSearch");
        let config = state.API_PARAMS;
        let data = `m=findProperty&city=${city}&folio=${state.ID_COMPANY}`;

        config.body = data;
        if (!state.propertiesSearch) {
            fetch(state.API_URL, config)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        if (res.data.length != 0) {
                            commit("setPropertiesSearch", res.data);
                            commit("setError", res.status);
                        } else {
                            commit("setPropertiesSearch", "notFind");
                            commit("setError", 204);
                        }
                    } else {
                        commit("setError", res.status);
                    }
                });
        }
    },
}




export const mutations = {

    setBody(state, body) {
        state.API_PARAMS.body = body;
    },
    /*****************************************************
     * General Mutations
     *****************************************************/
    setNewVisit(state) {
        state.NEWS_VISITS++;
    },
    setNewContact(state) {
        state.NEWS_CONTACTS++;
    },
    setInfoCompany(state, info) {
        // if (info.logoClean) {
        //     let apiLogo = info.logoClean;
        //     info.imageLogo = "https://agent.immosystem.com.mx/" + apiLogo;
        // } else {
        //     let apiLogo = info.logo;
        //     info.imageLogo = "https://agent.immosystem.com.mx/" + apiLogo;
        // }
        state.INFO_COMPANY = info;
    },
    setCompanyMetadata(state, metadata) {
        state.MATADATA.company = metadata;
    },

    setUserIp(state, userIp) {
        state.USER_IP = userIp.ip;
    },

    setError(state, code) {
        state.ERROR_CODE = code;
    },
    /*  COMMENTED FOR ERROR WAIT FOR FUTURE IMPLEMENT

    configureImages(state,origin){
      let imageTemp;
      let watermarkImage=state.INFO_COMPANY.logoClean;

      // watermark from remote source
      const options = {
        init(img) {
          img.AccessControlAllowOrigin='https://angelpinton.com';
        }
      };

      switch(origin){
        case'homeSlide':
          for(let x in state.homeCarousel){
            imageTemp=state.homeCarousel[x].largefile;

            watermark([imageTemp, watermarkImage], options)
              .image(watermark.image.lowerRight(0.5))
              .then((img)=>state.homeCarousel[x].largefile=img);
          }

        break;
      }
    },
    */

    /*****************************************************
     * Home Mutations
     *****************************************************/
    setHomeSlide(state, slides) {
        state.homeCarousel = slides;
    },
    setHomeProperties(state, properties) {
        state.homeList = properties;
    },

    /*****************************************************
     * Properties Mutations
     *****************************************************/
    setProperties(state, properties) {
        state.propertiesList = properties;
    },
    setPropertiesByAgent(state, properties) {
        state.propertiesByAgent = properties;
    },
    setProperty(state, property) {
        state.propertyDetail = property;
    },
    resetProperty(state, property) {
        state.propertyDetail = property;
    },
    setPages(state, pages) {
        state.pagesList = pages;
      },
      setResultados(state, resultadostotal) {
        state.totalResultados = resultadostotal;
      },
      resetPagesList(state) {
          state.pagesList.splice(0,132)
      },
        setTotalPag(state, pagtotal) {
          state.totalPag= pagtotal;
      },
    /*****************************************************
     * Developments Mutations
     *****************************************************/
    setDevelopments(state, developments) {
        state.developmentsList = developments;
    },
    setDevelopment(state, development) {
        state.developmentDetail = development;
    },
    resetDevelopment(state, development) {
        state.developmentDetail = development;
    },
    setUnit(state, unit) {
        state.activeUnit = unit;
    },
    /*****************************************************
     * Franchise Mutations
     *****************************************************/
    setTeam(state, team) {
        state.teamList = team;
    },
    setOffices(state, offices) {
        state.officesList = offices;
    },
    setTeamByOffice(state, data) {
        let index = data.index;
        state.teamByOffices[index].agents = data.team;
    },
    setAgent(state, agentInfo) {
        state.agentActive = 0;
        state.agentActive = agentInfo[0];
    },
    /*****************************************************
     * Search Mutations
     *****************************************************/
    setInputs(state, inputs) {
        state.inputs = inputs;
        //state.inputs.types=inputs.types;
    },
    resetPropertiesSearch(state) {
        state.propertiesSearch = null;
    },
    resetPropertiesV(state) {
        state.propertiesSearchV = null;
    },
    resetPropertiesR(state) {
        state.propertiesSearchR = null;
    },
    setPropertiesSearch(state, searchForm) {
        state.propertiesSearch = searchForm;
    },
    setPropertiesV(state, searchForm) {
        state.propertiesSearchV = searchForm;
    },
    setPropertiesR(state, searchForm) {
        state.propertiesSearchR = searchForm;
    },
}