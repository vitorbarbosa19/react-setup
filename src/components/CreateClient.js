import React from 'react'
import { createClient } from 'contentful'

const CreateClient = createClient({
	space: '98ogphhe0cc1',
	accessToken: 'ea320a1bc12327995cc58221602d7671157e0951202505704dce56761c7dceee'
})

export default CreateClient