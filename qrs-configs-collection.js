import { Mongo } from 'meteor/mongo';

class QrsConfigsCollection extends Mongo.Collection {

}

export const QrsConfigs = new QrsConfigsCollection('qrsConfigs');
QrsConfigs.attachBehaviour('timestampable');
