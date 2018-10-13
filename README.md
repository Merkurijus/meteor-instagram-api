### Package is no longer maintaned.

# Instagram API wrapper for Meteor

## Available functions:

```javascript
InstagramApi.tags.info({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        tagName: 'maesariang',
      }, function(err, data){});
```
```javascript
InstagramApi.tags.recent({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        tagName: 'maesariang',
      }, function(err, data){});
```
```javascript
InstagramApi.tags.search({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        searchQuery: 'maesariang',
      }, function(err, data){});
```

```javascript
InstagramApi.locations.info({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        locationId: 253530591, //maesariang
      }, function(err, data){});
```
```javascript
InstagramApi.locations.recent({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        locationId: 253530591, //maesariang
      }, function(err, data){});
```
```javascript
InstagramApi.locations.search({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        lat: 18.1578, //  Mae Sariang, Mae Hong Son, Thailand
        lng: 97.9336, //
      }, function(err, data){});
```

```javascript
InstagramApi.users.self({
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.users.userInfo({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.users.selfRecentPhotos({
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.users.userRecentPhotos({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.users.liked({
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.users.search({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        searchQuery: 'matas', //A part of the username string
      }, function(err, data){});
```

```javascript
InstagramApi.relationships.follows({
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.relationships.followedBy({
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.relationships.requestedBy({
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.relationships.relationship({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
      }, function(err, data){});
```
```javascript
InstagramApi.relationships.modifyRelationship({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        action: 'follow', //follow | unfollow | approve | ignore
      }, function(err, data){});
```

```javascript
InstagramApi.media.info({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
      }, function(err, data){});
```
```javascript
InstagramApi.media.shortcodeInfo({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        shortcode: '-aobg_Aq2A', //taken from https://www.instagram.com/p/-aobg_Aq2A/
      }, function(err, data){});
```
```javascript
InstagramApi.media.search({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        lat: 18.1578, //  Mae Sariang, Mae Hong Son, Thailand
        lng: 97.9336, //
      }, function(err, data){});
```

```javascript
InstagramApi.comments.get({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
      }, function(err, data){});
```
```javascript
InstagramApi.comments.post({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
        text: 'Testing API posting',
      }, function(err, data){});
```
```javascript
InstagramApi.comments.delete({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
        commentId: '1125905663717977767',
      }, function(err, data){});
```

```javascript
InstagramApi.likes.get({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
      }, function(err, data){});
```
```javascript
InstagramApi.likes.post({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
      }, function(err, data){});
```
```javascript
InstagramApi.likes.delete({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        mediaId: '1124388869685554560_2282680170',
      }, function(err, data){});
```
