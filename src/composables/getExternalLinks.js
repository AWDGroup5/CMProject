import { ref } from "vue";

function getGenesFromHpo(hpoId) {
  const hpo_base_url = `https://hpo.jax.org/api/hpo/term/${hpoId}`;

  let genes = ref([]);
  const error = ref(null);

  async function populateGeneList() {
    const genes_url = `${hpo_base_url}/genes`;

    try {
      let genes_data = await fetch(genes_url);;
      if (!genes_data.ok) {
        throw Error("Unable to get data from Human Phenotype Ontology");
      }

      genes = await genes_data.json();
      console.log(genes);
    } catch (genes_error) {
      error.value = genes_error.message;
      // console.log(error.value);
    }
  }

  return { genes, error, populateGeneList };
}

export default getGenesFromHpo;
