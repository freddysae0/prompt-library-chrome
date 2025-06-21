export async function fetchPrompts() {
    // For now just return some static prompts. In a real extension this could
    // fetch from storage or a remote service.
    return [
        "Explain this code",
        "Summarize the following text",
        "Write an email reply"
    ];
}
