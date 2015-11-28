InstagramApiHandler = function() {
  const self = this;
  let logging = true;

  self.log = function(msg) {
    if (!logging) {
      return true;
    }
    return console.log(msg);
  };

  self.showLogs = function(showLogs) {
    logging = showLogs;
  };

  const getEndpoint = function(url, passedOptions, callback) {
    const config = self.getInstagramService();
    const options = {
      params: {
        client_id: config.clientId,
      },
    };

    if (passedOptions && passedOptions.minTagId) {
      options.params.min_tag_id = passedOptions.minTagId;
    }

    if (passedOptions && passedOptions.maxTagId) {
      options.params.max_tag_id = passedOptions.maxTagId;
    }

    self.log('Calling get endpoint: ', url);

    if (!callback) {
      return HTTP.call('GET', url, options );
    }

    return HTTP.call('GET', url, options, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  };

  const postEndpoint = function(url, passedOptions, callback) {
    const config = self.getInstagramService();
    const options = {
      params: {
        text: passedOptions.text ? passedOptions.text : null,
        action: passedOptions.action ? passedOptions.action : null,
        client_id: config.clientId,
        access_token: passedOptions.accessToken,
      },
    };

    console.log(options);
    if (passedOptions && options.minTagId) {
      options.params.min_tag_id = passedOptions.minTagId;
    }

    if (passedOptions && passedOptions.maxTagId) {
      options.params.max_tag_id = passedOptions.maxTagId;
    }

    self.log('Calling post endpoint: ', url);
    self.log(options, '\n');

    if (!callback) {
      return HTTP.call('POST', url, options );
    }

    return HTTP.call('POST', url, options, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  };

  const deleteEndpoint = function(url, passedOptions, callback) {
    const config = self.getInstagramService();
    const options = {
      params: {
        client_id: config.clientId,
      },
    };

    if (passedOptions && passedOptions.minTagId) {
      options.params.min_tag_id = passedOptions.minTagId;
    }

    if (passedOptions && passedOptions.maxTagId) {
      options.params.max_tag_id = passedOptions.maxTagId;
    }

    self.log('Calling delete endpoint: ', url);

    if (!callback) {
      return HTTP.call('DELETE', url, options );
    }

    return HTTP.call('DELETE', url, options, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  };

  // Get image by tag (hashtag)
  // (see: https://www.instagram.com/developer/endpoints/tags/ )
  self.tags = {};
  const tagsEndpoint = 'https://api.instagram.com/v1/tags/';

  self.tags.info = function(options, callback) {
    const url = tagsEndpoint + options.tagName + '?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.tags.recent = function(options, callback) {
    const url = tagsEndpoint + options.tagName + '/media/recent?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.tags.search = function(options, callback) {
    const url = tagsEndpoint + 'search?q=' + options.searchQuery + '&access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  // Get image by location (locationId)
  // (see: https://www.instagram.com/developer/endpoints/locations/ )
  self.locations = {};
  const locationsEndpoint = 'https://api.instagram.com/v1/locations/';

  self.locations.info = function(options, callback) {
    const url = locationsEndpoint + options.locationId + '?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.locations.recent = function(options, callback) {
    const url = locationsEndpoint + options.locationId + '/media/recent?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.locations.search = function(options, callback) {
    const url = locationsEndpoint + 'search?lat=' + options.lat + '&lng=' + options.lng + '&access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  // Method for getting user info
  // (see: https://www.instagram.com/developer/endpoints/users/ )
  self.users = {};
  const usersEndpoint = 'https://api.instagram.com/v1/users/';

  self.users.self = function(options, callback) {
    const url = usersEndpoint + 'self/?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.users.userInfo = function(options, callback) {
    const url = usersEndpoint + options.userId + '/?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.users.selfRecentPhotos = function(options, callback) {
    const url = usersEndpoint + 'self/media/recent/?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.users.userRecentPhotos = function(options, callback) {
    const url = usersEndpoint + options.userId + '/media/recent/?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.users.liked = function(options, callback) {
    const url = usersEndpoint + 'self/media/liked?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.users.search = function(options, callback) {
    const url = usersEndpoint + 'search?q=' + options.searchQuery + '&access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  // Relationships
  // (see: https://www.instagram.com/developer/endpoints/relationships/ )
  self.relationships = {};

  self.relationships.follows = function(options, callback) {
    const url = usersEndpoint + 'self/follows?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.relationships.followedBy = function(options, callback) {
    const url = usersEndpoint + 'self/followed-by?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.relationships.requestedBy = function(options, callback) {
    const url = usersEndpoint + 'self/requested-by?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.relationships.relationship = function(options, callback) {
    const url = usersEndpoint + options.userId + '/relationship?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.relationships.modifyRelationship = function(options, callback) {
    const url = usersEndpoint + options.userId + '/relationship';
    return postEndpoint(url, options, callback);
  };

  // Media
  // (see: https://www.instagram.com/developer/endpoints/media/ )
  self.media = {};
  const mediaEndpoint = 'https://api.instagram.com/v1/media/';

  self.media.info = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.media.shortcodeInfo = function(options, callback) {
    const url = mediaEndpoint + 'shortcode/' + options.shortcode + '?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.media.search = function(options, callback) {
    const url = mediaEndpoint + 'search?lat=' + options.lat + '&lng=' + options.lng + '&access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  // Comments
  // (see: https://www.instagram.com/developer/endpoints/comments/ )
  self.comments = {};

  self.comments.get = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '/comments?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.comments.post = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '/comments';
    return postEndpoint(url, options, callback);
  };

  self.comments.delete = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '/comments/' + options.commentId + '?access_token=' + options.accessToken;
    return deleteEndpoint(url, options, callback);
  };

  // Likes
  // (see: https://www.instagram.com/developer/endpoints/likes/ )
  self.likes = {};

  self.likes.get = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '/likes?access_token=' + options.accessToken;
    return getEndpoint(url, options, callback);
  };

  self.likes.post = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '/likes';
    return postEndpoint(url, options, callback);
  };

  self.likes.delete = function(options, callback) {
    const url = mediaEndpoint + options.mediaId + '/likes?access_token=' + options.accessToken;
    return deleteEndpoint(url, options, callback);
  };

  // Method for returning a URL which your app can use to auth
  // the logged in Instagram user. Redirect your user to the passed URL
  // and let him/her accept or deny the request.
  self.getAuthUserURI = function(redirectURI) {
    const config = self.getInstagramService();
    return 'https://api.instagram.com/oauth/authorize/?client_id=' + config.clientId + '&redirect_uri=' + redirectURI + '&response_type=code';
  };

  // Method for retrieving an access_token for the user.
  // Requires a code which you get when the user grants access
  // using the URL returned from the getAuthUserURI method.
  // You need to provide the same redirectURI here as the one
  // you used when you called the getAuthUserURI method!
  self.getUserAccessToken = function(code, redirectURI) {
    const accessTokenURL = 'https://api.instagram.com/oauth/access_token/';
    const config = self.getInstagramService();
    const options = {
      params: {
        client_id: config.clientId,
        client_secret: config.secret,
        grant_type: 'authorization_code',
        redirect_uri: redirectURI,
        code: code,
      },
    };
    return HTTP.call('POST', accessTokenURL, options);
  };

  self.getInstagramService = function() {
    const config = ServiceConfiguration.configurations.findOne({service: 'instagram'});
    if (!config) {
      throw new ServiceConfiguration.ConfigError();
    } else {
      return config;
    }
  };
};

InstagramApi = new InstagramApiHandler();
