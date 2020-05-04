<template>
  <div>
    <div class="column">
      <h1 class="title is-1">Editor</h1>
      <h2 class="subtitle is-2">Simple Tool to to fasten the process of visualizing data</h2>
    </div>
    <div class="columns box">
      <div class="column is-two-thirds">
        <Cropper ref="cropper" class="upload-example-cropper" :src="image" />
      </div>
      <div class="column">
        <span class="button" @click="$refs.file.click()">
          <input type="file" name="teste" ref="file" @change="uploadImage($event)" accept="image/*" />
          Upload image
        </span>

        <button class="button" @click="crop">Crop</button>

        <div class="columns">
          <div class="column">
            <label class="label">Image Name</label>
            <input v-model="name" class="input" type="text" placeholder="Text input" />
            <label class="label">Image Path</label>
            <input v-model="path" class="input" type="text" placeholder="Text input" />

            <button class="button" @click="save_croped">Save Croped Image</button>
            <button class="button" @click="save_original">Save Original Image</button>
            <label class="label">Notes</label>
            <textarea class="textarea" v-model="notes" placeholder="Notes"></textarea>
            <label class="label">Found</label>
            <input v-model="found" class="input" type="text" placeholder="Found" />
            <button class="button" @click="save_to_database">Save To Database</button>
            <h6 class="title is-6">Crop</h6>
            <img v-if="img != ''" class="preview" :src="img" />
          </div>
        </div>
      </div>
    </div>
    <div class="column box">
      <cheatsheet />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import cheatsheet from "@/components/cheatsheets";
import { Cropper } from "vue-advanced-cropper";

export default {
  data: function() {
    return {
      file: "",
      name: "",
      path: "",
      notes: "",
      found: "",
      image: null,
      img: "",
      coordinates: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      },
      data: {
        original_src: "",
        notes: "",
        found: "",
        crops_src: []
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
      let filename = this.name + "_" + Date.now();
      this.data.original_src = "data/" + this.path + filename + ".jpg";
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("filename", filename);
      formData.append("filepath", this.path);
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
      //let block = [];
      let block = this.img.split(";");
      // Get the content type of the image
      let contentType = block[0].split(":")[1]; // In this case "image/gif"
      // get the real base64 content of the file
      let realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

      // Convert it to a blob to upload
      let blob = b64toBlob(realData, contentType);

      this.data.crops_src.push(
        "data/" + this.path + this.name + "_" + Date.now() + ".jpg"
      );
      let formData = new FormData();
      formData.append("filename", this.name + "_" + Date.now());
      formData.append("filepath", this.path);
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
    },
    save_to_database() {
      this.data.notes = this.notes;
      this.data.found = this.found;

      axios
        .post("http://localhost:4000/api/database.json/data", this.data)
        .then(function() {
          alert("SUCCESS!!");
        })
        .catch(function(error) {
          alert("FAILURE!!");
        });
    }
  },
  components: {
    Cropper,
    cheatsheet
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
  width: 90%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 2.5%;
}
</style>