/**
 * Created by dasco on 3/5/2017.
 */
import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/user/:id', component: User}
];