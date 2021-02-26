import { useGetUserQuery } from '../../../api/generated'

export default function User() {
    const { data, loading, error } = useGetUserQuery({
        variables: { id: 1 },
      })
    
      if (error) return <div>failed to load</div>
      if (loading) return <div>loading...</div>
      if (!data || !data.getUser) return <div>user not found</div>
}
    return(
        <div>
            Acconut
            {`Hello, ${data.getUser.name}`}
        </div>
    )
}