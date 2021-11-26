let preview = {
    cut: function (text) {
        if (text.length > 5) {
            if (text.includes(" ", 6 || text.substr(6) == '')) {
                let str2 = text.indexOf(" ", 6);
                let str3 = text.substr(0, str2);
                let str4 = str3.concat(" ***");
                alert(str4);
            } else {
                alert(text);
            }
        } else {
            alert(text);
        }
    },
};

preview.cut(prompt("Введите текст"));