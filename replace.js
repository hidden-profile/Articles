const fs = require('fs');

// Read the JSON file
fs.readFile('articles_data_part_14.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse JSON data
    let jsonData = JSON.parse(data);

    // Function to replace "distacart" and "Distacart"
    const replaceWords = (text) => {
        return text.replace(/\bdistacart\b/g, 'distacart.com').replace(/\bDistacart\b/g, 'Distacart.com');
    };

    // Update the JSON content
    jsonData = jsonData.map(item => {
        return {
            ...item,
            title: replaceWords(item.title),
            description: replaceWords(item.description)
        };
    });

    // Write the modified JSON back to the file
    fs.writeFile('articles_data_part_14.json', JSON.stringify(jsonData, null, 4), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File successfully updated!');
    });
});
