Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;

    return a.hostname;
  }
});

Template.postItem.events({
  //add your events here
});

Template.postItem.onCreated(function () {
  //add your statement here
});

Template.postItem.onRendered(function () {
  //add your statement here
});

Template.postItem.onDestroyed(function () {
  //add your statement here
});

