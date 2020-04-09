<template>
  <div>
    <h1 class="title is-1">Editor</h1>
    <h2 class="subtitle is-2">Simple Tool to to fasten the process of visualizing data</h2>
    <div class="columns box">
      <Cropper ref="cropper" class="upload-example-cropper" :src="image" />
    </div>
    <div class="columns box">
      <span class="button" @click="$refs.file.click()">
        <input type="file" name="teste" ref="file" @change="uploadImage($event)" accept="image/*" />
        Upload image
      </span>

      <button class="button" @click="crop">Crop</button>
    </div>

    <div class="columns box">
      <div class="column">
        <label class="label">Image Name</label>
        <input v-model="name" class="input" type="text" placeholder="Text input" />
        <button class="button" @click="save_croped">Save Croped Image</button>
        <button class="button" @click="save_original">Save Original Image</button>
      </div>

      <div class="column">
        <h6 class="title is-6">Crop</h6>
        <img v-if="img != ''" class="preview" :src="img" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Cropper } from "vue-advanced-cropper";

export default {
  data: function() {
    return {
      file: "",
      name: "",
      image: null,
      img: "",
      coordinates: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }
    };
  },
  methods: {
    crop() {
      const { coordinates, canvas } = this.$refs.cropper.getResult();
      this.coordinates = coordinates;

      this.img = canvas.toDataURL();
    },
    uploadImage(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.image = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    save_original() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("filename", this.name);
      formData.append("file", this.file);

      axios
        .post("http://localhost:3000/api/foo", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          alert("SUCCESS!!");
        })
        .catch(function(error) {
          alert("FAILURE!!");
        });
    },
    save_croped() {
      function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || "";
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (
          var offset = 0;
          offset < byteCharacters.length;
          offset += sliceSize
        ) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);

          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          var byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
      }

      var block = this.img.split(";");
      // Get the content type of the image
      var contentType = block[0].split(":")[1]; // In this case "image/gif"
      // get the real base64 content of the file
      var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

      // Convert it to a blob to upload
      var blob = b64toBlob(realData, contentType);
      let formData = new FormData();
      formData.append("file", blob);
      axios
        .post("http://localhost:3000/api/foo", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          alert("SUCCESS!!");
        })
        .catch(function(error) {
          alert("FAILURE!!");
        });
    }
  },
  components: {
    Cropper
  }
};
</script>
<style scoped>
.upload-example-cropper {
  border: solid 1px #eee;
  height: 600px;
  width: 100%;
}

.button:hover {
  background: #38d890;
}

.button input {
  display: none;
}

.preview {
  width: 45%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 2.5%;
}
</style>