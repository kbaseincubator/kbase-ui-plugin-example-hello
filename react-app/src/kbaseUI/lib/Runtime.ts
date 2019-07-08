import { AppConfig } from '../redux/integration/store';

export default class Runtime {
    token: string | null;
    username: string | null;
    realname: string | null;
    constructor() {
        this.token = 'xxx';
        this.username = 'eapearson';
        this.realname = 'Erik Pearson';
    }
    getAuthToken() {
        return this.token;
    }
    getUsername() {
        return this.username;
    }
    getRealname() {
        return this.realname;
    }
    getConfig(): AppConfig {
        return {
            baseUrl: '',
            defaultPath: '',
            services: {
                Groups: {
                    url: '/services/groups'
                },
                UserProfile: {
                    url: '/services/user_profile/rpc'
                },
                Workspace: {
                    url: '/services/ws'
                },
                ServiceWizard: {
                    url: '/services/service_wizard'
                },
                Auth: {
                    url: '/services/auth'
                },
                NarrativeMethodStore: {
                    url: '/services/narrative_method_store/rpc'
                },
                Catalog: {
                    url: '/services/catalog/rpc'
                },
                NarrativeJobService: {
                    url: '/services/njs_wrapper'
                }
            }
        };
    }
}
