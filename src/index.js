import {HeaderComponent} from './components/header.component.js'
import {NavigationComponent} from './components/navigation.component.js'
import {CreateComponent} from './components/create.component.js'
import {PostsComponent} from './components/posts.component.js'
import {FavoriteComponent} from './components/favorite.component.js'
import { LoaderComponent } from './components/loader.component.js';

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const loader = new LoaderComponent('loader')

const create = new CreateComponent('create')

const posts = new PostsComponent('posts', {loader})

const favorite = new FavoriteComponent('favorite', {loader})

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])