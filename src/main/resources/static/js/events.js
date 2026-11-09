function clearInput(target) {
    //if (target.value == 'type data') {
    if (target.value.toLowerCase().includes('type data')) {
        target.value = "";
    }
}
