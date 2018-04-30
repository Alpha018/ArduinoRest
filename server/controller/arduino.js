/**
 * Created by Tomás on 24-03-2018.
 */
'use strict';
const Cylon = require('cylon');

module.exports = function(app) {

    Cylon.robot({

        connections: {
            arduino: { adaptor: 'firmata', port: 'COM3' }
        },

        devices: {
            led: { driver: 'led', pin: 13 }
        },

        work: function (my) {
            app.route('/api/is_on').get(function(req, res, next) {
                res.status(200).send({
                    encendido: my.led.isOn()
                });
            });

            app.route('/api/turnOn').get(function(req, res, next) {
                my.led.turnOn();
                res.status(200).send({
                    encendido: 'se encendió el led'
                });
            });

            app.route('/api/turnOff').get(function(req, res, next) {
                my.led.turnOff();
                res.status(200).send({
                    encendido: 'se apagó el led'
                });
            });

            app.route('/api/toggle').get(function(req, res, next) {
                my.led.toggle();
                res.status(200).send({
                    encendido: my.led.isOn()
                });
            });
        }
    }).start();
};