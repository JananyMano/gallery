import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aaa056bbedfc4af868ad4b260b8e9ff31b48d121bd57f8210c716947ac0d1ea2'
    }
});