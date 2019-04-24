const shape = [4,2];
const data = tf.tensor([4,6,5,9,13,25,1,57], shape);

const data2 = tf.variable(tf.zeros([8]));

data2.print();

data2.assign(tf.tensor1d([12, 4, 5, 3, 32, 98, 55, 82]));

data2.print();

const data3 = tf.tensor1d([4, 6, 5, 9]);
const data4 = tf.tensor1d([9, 2, 1, 6]);

data3.print();
data4.print();

data3.add(data4).print();
data3.mul(data4).print();