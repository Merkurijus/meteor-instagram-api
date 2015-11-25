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
      });
```
```javascript
InstagramApi.tags.search({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        searchQuery: 'maesariang',
      });
```

```javascript
InstagramApi.locations.info({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        locationId: 253530591, //maesariang
      });
```
```javascript
InstagramApi.locations.recent({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        locationId: 253530591, //maesariang
      });
```
```javascript
InstagramApi.locations.search({
        userId: Meteor.user().services.instagram.id,
        accessToken: Meteor.user().services.instagram.accessToken,
        lat: 18.1578, //  Mae Sariang, Mae Hong Son, Thailand
        lng: 97.9336, //
      });
```

```javascript
InstagramApi.users.self();
```
```javascript
InstagramApi.users.userInfo();
```
```javascript
InstagramApi.users.selfRecentPhotos();
```
```javascript
InstagramApi.users.userRecentPhotos();
```
```javascript
InstagramApi.users.liked();
```
```javascript
InstagramApi.users.search();
```

```javascript
InstagramApi.relationships.follows();
```
```javascript
InstagramApi.relationships.followedBy();
```
```javascript
InstagramApi.relationships.requestedBy();
```
```javascript
InstagramApi.relationships.relationship();
```
```javascript
InstagramApi.relationships.modifyRelationship();
```

```javascript
InstagramApi.media.info();
```
```javascript
InstagramApi.media.shortcodeInfo();
```
```javascript
InstagramApi.media.search();
```

```javascript
InstagramApi.comments.get();
```
```javascript
InstagramApi.comments.post();
```
```javascript
InstagramApi.comments.delete();
```

```javascript
InstagramApi.likes.get();
```
```javascript
InstagramApi.likes.post();
```
```javascript
InstagramApi.likes.delete();

```