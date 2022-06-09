const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(`F:Succesfully added ${newMovie.dataValues.title} to the db`);

    } catch (error) {
        console.log(error);
    }
}

// List Movie
exports.listMovie = async () => {
    try {
        const response = await Movie.findAll();
        for (let i = 0; i < response.length; i++) {
            console.log(response[i].dataValues.title, response[i].dataValues.actor, response[i].dataValues.directorID)
        }
    } catch (error) {
        console.log(error);
    }
}

exports.updMovie = async (updateObj, filterObj) => {
    try {
        //find a movie and update a column
        const response = await Movie.update(updateObj, {
            where: filterObj
        })
        if (response[0] > 0) {
            console.log("F: Successfully updated");
        } else {
            console.log("F: Something went wrong");
        }
    } catch (error) {
        console.log(error);
    }
};

// Delete Movie
exports.delMovie = async (filterObj) => {
    try {
        const response = await Movie.destroy({
            where: {
                title: filterObj.title
            }
        });
        if (response > 0) {
            console.log("F: Successfully deleted")
        } else {
            console.log("F: Something went wrong");
        }
    } catch (error) {
        console.log(error);
    }
}