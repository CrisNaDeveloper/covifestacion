// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
cordova.require('cordova/channel').onPluginsReady.subscribe(function() {
    cordova.require('cordova-plugin-chrome-apps-bootstrap.mobile.impl').fgInit();
});
