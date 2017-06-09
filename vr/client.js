// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"
'use strict'
// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import {Module} from 'react-vr-web';
import {ReactNativeContext} from 'react-vr-web';
import * as THREE from 'three';

function init(bundle, parent, options) {
  const annyang = new Annyang();

  const vr = new VRInstance(bundle, 'VRShop', parent, {
    // Add custom options here
    cursorVisibility: 'visible',
    nativeModules: [annyang]
  });

  annyang.setNativeContext(vr.rootView.context)

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here

  };
  // Begin the animation loop
  vr.start();
  return vr;
}


export default class Annyang extends Module {
  _rnctx: ReactNativeContext;

  constructor() {
    super("Annyang")

    // Variables
    this._rnctx = null;
    var commands = {'Show me dogs': function() { alert("Success") }}

    if(annyang)
      console.log("annyang init success");

    annyang.addCommands(commands)
  }

  setNativeContext(rnctx: ReactNativeContext) {
    // Context
    this._rnctx = rnctx;
  }

  $start(resolve,reject) {
    annyang.start()
    console.log("Start");
    annyang.debug();

    if(this._rnctx !== 'undefined')
      this._rnctx.invokeCallback(resolve, [annyang.returnFirstResult()]);

  }

  stop() {
    annyang.abort()
    console.log("Stop")
  }

  showAlert() {
    alert("Hello")
  }

}

window.ReactVR = {init};
