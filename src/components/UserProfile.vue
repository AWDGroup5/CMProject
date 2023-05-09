<script setup>
import { ref, watch } from "vue";
import { firebaseFireStore, doc, firebaseAuthentication, collection, where, query } from "@/firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, updateDoc } from "firebase/firestore";

const userEmail = ref(null)
const userName = ref(null)
const userData = ref('')


onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    userEmail.value = currentUser.email;
    userName.value = currentUser.displayName
} else {
    userEmail.value == null;
    userName.value == null;
}
});

const displayName = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");
const institute = ref("");
const address1 = ref("");
const address2 = ref("");
const address3 = ref("");
const postCode = ref("")
const confirmPassword = ref("");

const errorProfile = ref("");

watch(confirmPassword, () => {
  if(
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
  ) {
    errorProfile.value = "The passwords do not match";
  } else {
    errorProfile.value = null;
  }
})

async function update() {
    //At least you know that this code wasn't stolen -- no one, in their right mind, would use this code
    const userDataRef = query(collection(firebaseFireStore, 'users'), where('email', '==', userEmail.value))
    const userSnap = await getDoc(userDataRef);

    //displayName
    const dbDisplayName = String(userSnap.docs.map(doc => doc.data().displayName))
    if(displayName.value !== "") {
        if(displayName.value != dbDisplayName) {
            displayName.value = displayName.value
        } else {
            displayName.value = dbDisplayName
        }
    } else {
        displayName.value = dbDisplayName
    }

    //email
    const dbEmail = String(userSnap.docs.map(doc => doc.data().email))
    if(email.value !== "") {
        if(email.value != dbEmail) {
            email.value = email.value
        } else {
            email.value = dbEmail
        }
    } else {
        email.value = dbEmail
    }

    //phone
    const dbPhone = String(userSnap.docs.map(doc => doc.data().phone))
    if(phone.value !== "") {
        if(phone.value != dbPhone) {
            phone.value = phone.value
        } else {
            phone.value = dbPhone
        }
    } else {
        phone.value = dbPhone
    }

    //institute
    const dbInstitute = String(userSnap.docs.map(doc => doc.data().institute))
    if(institute.value !== "") {
        if(institute.value != dbInstitute) {
            institute.value = institute.value
        } else {
            institute.value = dbInstitute
        }
    } else {
        institute.value = dbInstitute
    }

    //address1
    const dbAddress1 = String(userSnap.docs.map(doc => doc.data().address1))
    if(address1.value !== "") {
        if(address1.value != dbAddress1) {
            address1.value = address1.value
        } else {
            address1.value = dbAddress1
        }
    } else {
        address1.value = dbAddress1
    }
    
    //address2
    const dbAddress2 = String(userSnap.docs.map(doc => doc.data().address2))
    if(address2.value !== "") {
        if(address2.value != dbAddress2) {
            address2.value = address2.value
        } else {
            address2.value = dbAddress2
        }
    } else {
        address2.value = dbAddress2
    }

    //address3
    const dbAddress3 = String(userSnap.docs.map(doc => doc.data().address3))
    if(address3.value !== "") {
        if(address3.value != dbAddress3) {
            address3.value = address3.value
        } else {
            address3.value = dbAddress3
        }
    } else {
        address3.value = dbAddress3
    }

    //postCode
    const dbPostCode = String(userSnap.docs.map(doc => doc.data().postCode))
    if(postCode.value !== "") {
        if(postCode.value != dbPostCode) {
            postCode.value = postCode.value
        } else {
            postCode.value = dbPostCode
        }
    } else {
        postCode.value = dbPostCode
    }


    const userInfo = {
        displayName: displayName.value,
        email: email.value,
        phone: phone.value,
        institute: institute.value,
        address1: address1.value,
        address2: address2.value,
        address3: address3.value,
        postCode: postCode.value,
    }

    if(!errorProfile.value) {
        updateDoc(userDataRef, userInfo)
            .then(() => {
                console.log(displayName.value +": User has been successfully updated");
                router.push("/profile")
            })
            .catch(error => {
                console.log(error);
            })
        .catch((error) => {
            errorProfile.value = error.message;
        })
    }

}
</script>

<template>
    <el-form class="register" @submit.prevent>

        <h2>{{ userName }}</h2>
    
        <el-divider />

        <div v-if="errorProfile">
            <el-button plain type="danger" disabled icon="el-icon-error">
                {{ errorProfile }}
            </el-button>
        </div>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="Name"
                :rules="[
                    { required: true, message: 'Name is required'}
                ]">
                    <el-input
                        type="text"
                        autocomplete="off"
                        v-model="displayName"
                    ></el-input>
                </el-form-item>
                
            </el-col>
            <el-col :span="12">

                <el-form-item label="Institution Affiliation"
                :rules="[
                    { required: true, message: 'Institution Affiliation is required'}
                ]">
                <el-input
                    type="text"
                    v-model="institute"
                ></el-input>
                </el-form-item>
            
            </el-col>
        </el-row>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="Email"
                :rules="[
                    { required: true, message: 'Email is required'}
                ]">
                    <el-input
                        type="email"
                        v-model="email"
                    ></el-input>
                </el-form-item>
            
            </el-col>
            <el-col :span="12">

                <el-form-item label="Phone">
                    <el-input
                        type="tel"
                        v-model="phone"
                    ></el-input>
                </el-form-item>
            
            </el-col>
        </el-row>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="Password" prop="pass"
                :rules="[
                    { required: true, message: 'Password is required'}
                ]">
                    <el-input
                        type="password"
                        autocomplete="off"
                        show-password
                        v-model="password"
                    ></el-input>
                </el-form-item>
            
            </el-col>
            <el-col :span="12">
                <el-form-item v-if="password" label="Confirm Password" prop="pass"
                :rules="[
                    { required: true, message: 'Confirm the password'}
                ]">
                    <el-input
                        type="password"
                        required
                        autocomplete="off"
                        show-password
                        v-model="confirmPassword"
                    ></el-input>
                </el-form-item>
            
            </el-col>
        </el-row>

        <el-divider />

        <el-form-item label="Address Line 1">
            <el-input
                type="text"
                v-model="address1"
            ></el-input>
        </el-form-item>


        <el-form-item label="Address Line 2">
        <el-input
            type="text"
            v-model="address2"
        ></el-input>
        </el-form-item>

        <el-form-item label="Address Line 3">
        <el-input
            type="text"
            v-model="address3"
        ></el-input>
        </el-form-item>

        <el-form-item label="Postcode">
        <el-input
            type="text"
            v-model="postCode"
        ></el-input>
        </el-form-item>


        <el-form-item  v-if="
            displayName || 
            institute || 
            email || 
            phone || 
            password || 
            address1 || 
            address2 || 
            address3 || 
            postCode">

            <el-divider />

            <el-button class="btnAccount"
                type="primary"
                @click="update"
                >Update
            </el-button>
        </el-form-item>

        <el-divider />
    </el-form>

</template>

<style scoped>
.btnAccount {
    margin: auto;
    width: 50%;
}

</style>