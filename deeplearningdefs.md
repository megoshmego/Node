Neural Network: A computing system inspired by the human brain's neural network. These networks are based on a collection of connected nodes called artificial neurons, or "neurons".

Deep Learning: A subfield of machine learning that uses algorithms to model high-level abstractions in data through the use of multiple processing layers. This is where the term "deep" comes from, as it refers to the number of layers in the network.

Artificial Neuron: A mathematical function conceived as a model of biological neurons. The artificial neuron receives one or more inputs (representing dendrites) and sums them to produce an output (representing a neuron's axon). Usually, the sums of each node are weighted, and the output of the neuron is calculated using a non-linear function known as the activation function.

Activation Function: A mathematical function used in a neural network that determines the output of a neuron. The function is attached to each neuron in the network, and determines whether it should be activated or not, based on whether each neuron’s input is relevant for the model's prediction.

Backpropagation: A method used to train neural networks by calculating the gradient of the loss function. This gradient is then used in an optimization process to adjust the parameters of the model to minimize the loss function.

Gradient Descent: An optimization algorithm that's used to minimize some function by iteratively moving in the direction of steepest descent as defined by the negative of the gradient.

Overfitting: A concept in machine learning where a model becomes too complex and starts to predict the training data too well, so it performs poorly on new, unseen data. This happens because the model learns the noise in the training data instead of the actual relationships between variables.

Regularization: A technique used to prevent overfitting by adding a penalty to the loss function. By increasing the model's simplicity or reducing its complexity, we can increase its ability to generalize from training data to unseen data.

Convolutional Neural Networks (CNNs): A type of neural network typically used for image processing tasks, which uses convolutional layers that scan an image for features.

Recurrent Neural Networks (RNNs): A type of neural network where connections between nodes form a directed graph along a sequence, allowing it to use its internal state (memory) to process variable-length sequences of inputs.

Long Short-Term Memory (LSTM): A type of RNN that has feedback connections. It can process entire sequences of data and is capable of learning long-term dependencies, which makes it useful for time-series data.

Epochs: One epoch occurs when the neural network has processed the entire dataset once. This is used in the context of training a model.

Batch Size: The number of data points processed in a single pass.

Stochastic Gradient Descent (SGD): A version of Gradient Descent where on each forward pass a batch (subset) of the input data is used instead of the full dataset. This is an optimization to make the computations faster and more manageable.

Learning Rate: A hyper-parameter that determines the step size at each iteration while moving toward a minimum of a loss function. It controls how much we are adjusting the weights with respect the loss gradient.

Loss Function: A method of evaluating how well your algorithm models your dataset. If your predictions are totally off, your loss function will output a higher number. If they’re pretty good, it’ll output a lower one.