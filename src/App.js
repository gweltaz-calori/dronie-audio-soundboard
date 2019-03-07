import { Component, Create, Vector2, TweenManager, Ease,SuperAudioManager } from "./lib/plume";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds : [
        "calm",
        "colere",
        "touch1",
        "touch2",
        "touch3",
        "beat",
        "hover",
        "nappe",
        "click_drone1",
        "click_drone2",
        "click_drone3",
        "click_drone4",
        "click_human1",
        "click_human2",
        "click_human3",
        "click_human4",
        "slider1",
        "slider2",
        "slider3",
        "slider4",
        "slider5",
        "slider6",
        "nappeTimide",
        "magnetTouch",
        "melodie"
      ],
      sound : null
    }
  }

  loadSounds() {
    SuperAudioManager.start();

    SuperAudioManager.init({
      master: {
        volume: 1,
        effects: [],
      },
      channels: [
        {
          name: 'calm',
          volume: 1,
          effects: [
            {
              name: 'main_low_pass',
              type: 'LOW_PASS_FILTER',
              frequency: 20000,
              Q: 0,
              gain: 0,
            },
          ],
          audios: {
            calm: {
              loop: false,
              url: require('./sounds/Colere/calm.ogg'),
              loadGroup: 'audio',
              volume: 2,
            },
          },
        },
        {
          name: 'colere',
          volume: 1,
          effects: [
            {
              name: 'main_low_pass',
              type: 'LOW_PASS_FILTER',
              frequency: 20000,
              Q: 0,
              gain: 0,
            },
          ],
          audios: {
            colere: {
              loop: false,
              url: require('./sounds/Colere/angry.ogg'),
              loadGroup: 'audio',
            },
          },
        },
        {
          name: 'vfx',
          volume: 1,
          effects: [],
          audios: {
            touch1: {
              loop: false,
              volume: 1.8,
              url: require('./sounds/Colere/touch1.ogg'),
              loadGroup: 'audio',
            },
            touch2: {
              loop: false,
              volume: 1.8,
              url: require('./sounds/Colere/touch2.ogg'),
              loadGroup: 'audio',
            },
            touch3: {
              loop: false,
              volume: 1.8,
              url: require('./sounds/Colere/touch3.ogg'),
              loadGroup: 'audio',
            },
            beat: {
              loop: false,
              url: require('./sounds/Intro/beat.wav'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            hover: {
              loop: false,
              url: require('./sounds/Intro/hover.ogg'),
              loadGroup: 'audio',
              volume: 1.8,
            },
            nappe: {
              loop: false,
              url: require('./sounds/Intro/nappe.ogg'),
              loadGroup: 'audio',
            },
            click_drone1: {
              loop: false,
              url: require('./sounds/Jeu/click_drone1.ogg'),
              loadGroup: 'audio',
            },
            click_drone2: {
              loop: false,
              url: require('./sounds/Jeu/click_drone2.ogg'),
              loadGroup: 'audio',
            },
            click_drone3: {
              loop: false,
              url: require('./sounds/Jeu/click_drone3.ogg'),
              loadGroup: 'audio',
            },
            click_drone4: {
              loop: false,
              url: require('./sounds/Jeu/click_drone4.ogg'),
              loadGroup: 'audio',
            },
            click_human1: {
              loop: false,
              url: require('./sounds/Jeu/click_human1.ogg'),
              loadGroup: 'audio',
            },
            click_human2: {
              loop: false,
              url: require('./sounds/Jeu/click_human2.ogg'),
              loadGroup: 'audio',
            },
            click_human3: {
              loop: false,
              url: require('./sounds/Jeu/click_human3.ogg'),
              loadGroup: 'audio',
            },
            click_human4: {
              loop: false,
              url: require('./sounds/Jeu/click_human4.ogg'),
              loadGroup: 'audio',
            },
            slider1: {
              loop: false,
              url: require('./sounds/Slider/slider1.ogg'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            slider2: {
              loop: false,
              url: require('./sounds/Slider/slider2.ogg'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            slider3: {
              loop: false,
              url: require('./sounds/Slider/slider3.ogg'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            slider4: {
              loop: false,
              url: require('./sounds/Slider/slider4.ogg'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            slider5: {
              loop: false,
              url: require('./sounds/Slider/slider5.ogg'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            slider6: {
              loop: false,
              url: require('./sounds/Slider/slider6.ogg'),
              loadGroup: 'audio',
              volume: 1.5,
            },
            nappeTimide: {
              loop: false,
              url: require('./sounds/Timide/nape3.ogg'),
              loadGroup: 'audio',
            },
            magnetTouch: {
              loop: false,
              url: require('./sounds/Timide/magnetTouch.ogg'),
              loadGroup: 'audio',
              volume: 1.8,
            },
            melodie: {
              loop: false,
              url: require('./sounds/Union/melodie.ogg'),
              loadGroup: 'audio',
              volume: 2.3,
            },
          },
        },
      ],
    });

    SuperAudioManager.load({
      groups: ['audio'],
    })
  }

  triggerSound(sound) {
    this.state.sound && this.state.sound.stop()
    this.state.sound = SuperAudioManager.trigger(sound)
  }

  stop() {
    this.state.sound && this.state.sound.stop()
  }

  render() {
    return Create({
      children : [
        Create({
          type : "button",
          text : "Load Sounds",
          height : 150,
          width : 150,
          background : "green",
          onTouch : this.loadSounds.bind(this)
        }),
        Create({
          type : "button",
          text : "Stop",
          height : 150,
          width : 150,
          background : "red",
          onTouch : this.stop.bind(this)
        }),
        Create({
          children : this.state.sounds.map(sound => Create({
            type: "button",
            height : 150,
            width : 150,
            text : sound,
            onTouch : this.triggerSound.bind(this,sound)
          }))
        })
      ]
    });
  }
}
