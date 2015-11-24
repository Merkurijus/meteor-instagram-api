InstagramApiHandler = function () {
	const self = this;
	let logging = true;

	self.log = function (msg) {
		if (!logging) {
			return true;
		}
		return console.log(msg);
	};

	self.showLogs = function(showLogs) {
		logging = showLogs;
	};

	const getEndpoint = function(url, passedOptions, callback) {
		const options = {
			params: {
				client_id: Meteor.settings.InstagramAPI.CLIENT_ID,
			}
		};

		if (passedOptions && passedOptions.minTagId) {
			options.params.min_tag_id = passedOptions.minTagId;
		}

		if (passedOptions && passedOptions.maxTagId) {
			options.params.max_tag_id = passedOptions.maxTagId;
		}

		self.log('Calling get endpoint: ' + url);
		self.log(options, '\n');

		if (!callback) {
			return HTTP.call('GET', url, options );
		}

		return HTTP.call('GET', url, options, function(err, res) {
			if (err) {
				callback(err);
			} else {
				callback(null, res);
			}
		});
	};

	const postEndpoint = function(url, options, callback) {
		var options = {
			access_token: options.accessToken,
     	text: options.text ? options.text : null,
     	action: options.action ? options.action : null,
			params: {
				client_id: Meteor.settings.InstagramAPI.CLIENT_ID,
			}
		};

		if (passedOptions && passedOptions.minTagId) {
			options.params.min_tag_id = passedOptions.minTagId;
		}

		if (passedOptions && passedOptions.maxTagId) {
			options.params.max_tag_id = passedOptions.maxTagId;
		}

		self.log('Calling post endpoint: ' + url);
		self.log(options, '\n');

		if (!callback) {
			return HTTP.call('POST', url, options );
		}

		return HTTP.call('POST', url, options, function(err, res) {
			if (err) {
				callback(err);
			} else {
				callback(null, res);
			}
		});
	};

	const deleteEndpoint = function(url, passedOptions, callback) {
		const options = {
			params: {
				client_id: Meteor.settings.InstagramAPI.CLIENT_ID,
			}
		};

		if (passedOptions && passedOptions.minTagId) {
			options.params.min_tag_id = passedOptions.minTagId;
		}

		if (passedOptions && passedOptions.maxTagId) {
			options.params.max_tag_id = passedOptions.maxTagId;
		}

		self.log('Calling delete endpoint: ' + url);
		self.log(options, '\n');

		if (!callback) {
			return HTTP.call('DELETE', url, options );
		}

		return HTTP.call('DELETE', url, options, function(err, res) {
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

	self.tags.info = function (options, callback) {
		const url = tagsEndpoint + options.tagName + '?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	self.tags.recent = function (options, callback) {
		const url = tagsEndpoint + options.tagName + '/media/recent?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	self.tags.search = function (options, callback) {
		const url = tagsEndpoint + 'search?q=' + options.searchQuery +'&access_token' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	// Get image by location (locationId)
	// (see: https://www.instagram.com/developer/endpoints/locations/ )
	self.locations = {};
	const locationsEndpoint = 'https://api.instagram.com/v1/locations/';

	self.locations.info = function (options, callback) {
		const url = locationsEndpoint + options.locationId+'?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	self.locations.recent = function (options, callback) {
		const url = locationsEndpoint + options.locationId+'/media/recent?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	self.locations.search = function (options, callback) {
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
	}

	self.users.selfRecentPhotos = function(options, callback) {
		const url = usersEndpoint + 'self/media/recent/?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.users.userRecentPhotos = function(options, callback) {
		const url = usersEndpoint + options.userId + '/media/recent/?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.users.liked = function(options, callback) {
		const url = usersEndpoint + 'self/media/liked?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	self.users.searchQuery = function(options, callback) {
		const url = usersEndpoint + 'search?q=' + options.searchQuery + '&access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	// Relationships
	// (see: https://www.instagram.com/developer/endpoints/relationships/ )
	self.relationships = {}

	self.relationships.follows = function(options, callback) {
		const url = usersEndpoint + 'self/follows?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.relationships.followedBy = function(options, callback) {
		const url = usersEndpoint + 'self/followed-by?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.relationships.requestedBy = function(options, callback) {
		const url = usersEndpoint + 'self/requested-by?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.relationships.relationship = function(options, callback) {
		const url = usersEndpoint + options.userId + '/relationship?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.relationships.modifyRelationship = function(options, callback) {
		const url = usersEndpoint + options.userId + '/relationship';
		return postEndpoint(url, options, callback);
	}

	// Media
	// (see: https://www.instagram.com/developer/endpoints/media/ )
	self.media = {}
	const mediaEndpoint = 'https://api.instagram.com/v1/media/';

	self.media.info = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.media.shortcodeInfo = function(options, callback) {
		const url = mediaEndpoint + 'shortcode/' + options.shortcode + '?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.media.search = function(options, callback) {
		const url = mediaEndpoint + 'search?lat=' + options.lat + '&lng=' + options.lng + '&access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	};

	// Comments
	// (see: https://www.instagram.com/developer/endpoints/comments/ )
	self.comments = {};

	self.comments.getComments = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '/comments?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.comments.postComments = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '/comments;
		return postEndpoint(url, options, callback);
	}

	self.comments.delComments = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '/comments/' + options.commentId + '?access_token=' + options.accessToken;
		return deleteEndpoint(url, options, callback);
	}

	// Likes
	// (see: https://www.instagram.com/developer/endpoints/likes/ )
	self.likes = {};

	self.likes.getLikes = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '/likes?access_token=' + options.accessToken;
		return getEndpoint(url, options, callback);
	}

	self.likes.postLikes = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '/likes';
		return postEndpoint(url, options, callback);
	}

	self.likes.delLikes = function(options, callback) {
		const url = mediaEndpoint + options.mediaId + '/likes?access_token=' + options.accessToken;
		return deleteEndpoint(url, options, callback);
	}

	// Method for returning a URL which your app can use to auth
	// the logged in Instagram user. Redirect your user to the passed URL
	// and let him/her accept or deny the request.
	self.getAuthUserURI = function(redirectURI) {
		return 'https://api.instagram.com/oauth/authorize/?client_id=' + Meteor.settings.InstagramAPI.CLIENT_ID + '&redirect_uri=' + redirectURI + '&response_type=code';
	};

	// Method for retrieving an access_token for the user.
	// Requires a code which you get when the user grants access
	// using the URL returned from the getAuthUserURI method.
	// You need to provide the same redirectURI here as the one
	// you used when you called the getAuthUserURI method!
	self.getUserAccessToken = function(code, redirectURI) {
		const accessTokenURL = 'https://api.instagram.com/oauth/access_token/';
		const options = {
			params: {
				client_id: Meteor.settings.InstagramAPI.CLIENT_ID,
				client_secret: Meteor.settings.InstagramAPI.CLIENT_SECRET,
				grant_type: 'authorization_code',
				redirect_uri: redirectURI,
				code: code
			}
		};
		return HTTP.call('POST', accessTokenURL, options);
	};

	// Make sure user has provided all the Instagram API keys needed.
	// Won't check if the keys are actually valid though!
	self.checkInstagramAPIkeysAreSet = function () {
		return Meteor.startup(function() {
			// Make sure there is a InstagramAPI object in settings
			if (!Meteor.settings.InstagramAPI) {
				throw new Error('No "InstagramAPI" in settings.');
			}
			// Make sure user has provided client id and secret
			if (!Meteor.settings.InstagramAPI.CLIENT_ID) {
				throw new Error('No "InstagramAPI.CLIENT_ID" in settings.');
			}
			if (!Meteor.settings.InstagramAPI.CLIENT_SECRET) {
				throw new Error('No "InstagramAPI.CLIENT_SECRET" in settings.');
			}
			return true;
		});

	};

	self.init = function () {
		self.checkInstagramAPIkeysAreSet();
	};

	self.init();
}

InstagramApi = new InstagramApiHandler();