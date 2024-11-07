const app = {
    data() {
        return {
            contactos: [],
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: '',
        };
    },
    methods: {
        agregarContacto() {
            if (this.nuevoNombre && this.nuevoTelefono && this.nuevaCategoria) {
                this.contactos.push({
                    nombre: this.nuevoNombre,
                    telefono: this.nuevoTelefono,
                    categoria: this.nuevaCategoria,
                    mensajes: 0,
                    llamadas: 0,
                });
                this.nuevoNombre = '';
                this.nuevoTelefono = '';
                this.nuevaCategoria = '';
            }
        },
        incrementarMensajes(index) {
            if (this.contactos[index].mensajes < 25) {
                this.contactos[index].mensajes++;
            }
        },
        decrementarMensajes(index) {
            if (this.contactos[index].mensajes > 0) {
                this.contactos[index].mensajes--;
            }
        },
        incrementarLlamadas(index) {
            if (this.contactos[index].llamadas < 15) {
                this.contactos[index].llamadas++;
            }
        },
        decrementarLlamadas(index) {
            if (this.contactos[index].llamadas > 0) {
                this.contactos[index].llamadas--;
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
    },
};

Vue.createApp(app).mount('#app');
