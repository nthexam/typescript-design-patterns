export async function sleep(duration: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}
