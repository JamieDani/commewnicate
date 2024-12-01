import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: '',
});

export async function callUser(userNumber: string, agentDescription: string, agentType: string) {
  const phoneCallResponse = await client.call.createPhoneCall({
    from_number: '',
    to_number: userNumber,
    retell_llm_dynamic_variables: {
        "agent_description": agentDescription, // user provided description of professional background
        "agent_type": agentType, // networking, interviewing, pitching
      },
  });

  console.log(phoneCallResponse.agent_id);
  console.log(phoneCallResponse.transcript);
  console.log(phoneCallResponse.call_analysis);

  return phoneCallResponse;
}

// callUser('+[number]', 'Famous hackathon content creator with 21 hackathon wins', 'networking');