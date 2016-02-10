var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});

Template.postsList.events({
  //add your events here
});

Template.postsList.onCreated(function () {
  //add your statement here
});

Template.postsList.onRendered(function () {
  //add your statement here
});

Template.postsList.onDestroyed(function () {
  //add your statement here
});

