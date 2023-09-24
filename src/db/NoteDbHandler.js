
class NoteDbHandler {

    validate(noteDTO) {
        if (noteDTO === null || noteDTO === undefined)
            throw new Error('noteDto can not be null');
        let user = noteDTO.user;
        if (user === null || user === undefined || user?.id === null || user?.id === undefined)
            throw new Error('Invalid user');

        let title = noteDTO?.title;

        if (title === null || title === undefined || title.trim().length === 0)
            throw new Error('Title can not be empty')
    }

    async saveNote(noteDTO) {

        let promise = new Promise(async (resolve, reject) => {
            try {
                this.validate(noteDTO);
                let response = await fetch('http://localhost:8080/api/v1/notes/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(noteDTO),
                });

                if (response.ok === false)
                    reject(response.body)

                else resolve(true);

            } catch (error) {
                reject(error)
            }
        })

        return promise;

    }

    validate(userId, noteId) {
        if (userId === undefined || userId === null || typeof (userId) !== 'number')
            throw new Error('invalid user Id')

        if (noteId === undefined || noteId === null || typeof (noteId) !== 'number')
            throw new Error('invalid note Id')
    }
    getNotesById(userId) {

        let promise = new Promise(async (resolve, reject) => {
            try {
                if (userId === undefined || userId === null || typeof (userId) !== 'number') {
                    reject('invalid user Id')
                }
                let reponse = await fetch('http://localhost:8080/api/v1/notes/getByUser?userId=1', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(value => value.json())
                    .then(parsed => resolve(parsed))
                    .catch(err => reject(err))


            } catch (error) {
                reject(error)
            }
        })

        return promise;
    }
}

export default NoteDbHandler;



