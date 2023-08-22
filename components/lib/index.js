// import Demo from "./demo";
// import Card from "./card";

// const components = {
//   Demo,
//   Card,
// };

// const install = function (Vue) {
//   if (install.installed) return;
//   console.log('components -->', components)
//   Object.keys(components).forEach((key) => {
//     Vue.component(components[key].name, components[key]);
//   });
// };

// const API = {
//   install,
// };

// export default API;

/// ----
import Demo from './demo';
import Card from './card';

// import { version } from '../../package.json';

const components = {
  Demo,
  Card,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  })
};



const API = {
  install
};

export default API;