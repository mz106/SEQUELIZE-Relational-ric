const { Movie, Actor } = require("../associations.js");

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
        const movie = await Movie.findAll();
        const arr = [];
        
        for (let i = 0; i < movie.length; i++) {
            const actor = await Actor.findAll({where: { id: movie[i].ActorId }})
            arr.push({title: movie[i].title, actor: actor[0].dataValues.fullName});
        }

        arr.forEach(item => console.log(item.title, item.actor))
       
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