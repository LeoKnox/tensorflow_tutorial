function simpleAdd(input1, input2) {

    return tf.tidy(() => {
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    }) //tidy frees up gpu memory
}

const data1 = tf.tensor1d([4, 7, 2, 9]);
const data2 = tf.tensor1d([6, 3, 8, 2]);

const result = simpleAdd(data1, data2);
result.print();