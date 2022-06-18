
export const randomId = () => {
    const oneNum = Date.now().toString(36)
    const twoNum = Math.random().toString(36).substring(2)

    return oneNum + twoNum
}

