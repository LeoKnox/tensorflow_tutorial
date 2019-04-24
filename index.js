const model = tf.sequential();

model.add(
    tf.layers.simpleRNN({
        inputShape: [20, 4],
        units: 20,
        recurrentInitializer: 'GlorotNormal',
    })
);
