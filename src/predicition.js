const physics = {
    gravity: -9.81
};

function predictMovement() {
    const timeInterval = 1/60; // assuming 60fps

    // Calculate new position with acceleration and velocity
    object.position.x += object.velocity.x * timeInterval + 0.5 * object.acceleration.x * timeInterval * timeInterval;
    object.position.y += object.velocity.y * timeInterval + 0.5 * object.acceleration.y * timeInterval * timeInterval - 0.5 * physics.gravity * timeInterval * timeInterval;
    object.position.z += object.velocity.z * timeInterval + 0.5 * object.acceleration.z * timeInterval * timeInterval;

    // Update velocity with acceleration
    object.velocity.x += object.acceleration.x * timeInterval;
    object.velocity.y += object.acceleration.y * timeInterval - physics.gravity * timeInterval;
    object.velocity.z += object.acceleration.z * timeInterval;
}

module.exports = {
    predictMovement
};
