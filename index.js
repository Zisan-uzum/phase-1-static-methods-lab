class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9 '-]/g, ""); // ^ means not
    }
    static titleize(string) {
        const exception = [
            "a",
            "an",
            "the",
            "but",
            "of",
            "and",
            "for",
            "at",
            "by",
            "from",
        ];

        return string
            .split(" ")
            .map((word, index) => {
                if (index === 0 || !exception.includes(word)) {
                    return this.capitalize(word);
                } else {
                    return word;
                }
            })
            .join(" ");
    }
}
